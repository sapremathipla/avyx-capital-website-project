import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const countries = [
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Singapore", code: "SG", dialCode: "+65" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "Japan", code: "JP", dialCode: "+81" },
  { name: "China", code: "CN", dialCode: "+86" },
  { name: "Brazil", code: "BR", dialCode: "+55" },
  { name: "South Africa", code: "ZA", dialCode: "+27" },
  { name: "Netherlands", code: "NL", dialCode: "+31" },
  { name: "Switzerland", code: "CH", dialCode: "+41" },
  { name: "Hong Kong", code: "HK", dialCode: "+852" },
  { name: "New Zealand", code: "NZ", dialCode: "+64" },
  { name: "Ireland", code: "IE", dialCode: "+353" },
  { name: "Israel", code: "IL", dialCode: "+972" },
  { name: "Mexico", code: "MX", dialCode: "+52" },
];

const purposes = [
  "Investment Inquiry",
  "Partnership Opportunity",
  "Business Consultation",
  "Media & Press",
  "Career Opportunities",
  "General Inquiry",
];

interface FormData {
  fullName: string;
  email: string;
  country: string;
  mobileNumber: string;
  purpose: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  mobileNumber?: string;
  purpose?: string;
  message?: string;
}

const EMAILJS_SERVICE_ID = "service_gfukeem";
const EMAILJS_TEMPLATE_ID = "template_au7m95n";
const EMAILJS_PUBLIC_KEY = "JhmnIGMuePXVF7Ojt"; // User needs to add their public key

export const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    mobileNumber: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedCountry = countries.find((c) => c.code === formData.country);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    const phoneRegex = /^[0-9]{6,15}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobileNumber.replace(/\s/g, ""))) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Please select a purpose";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        country: selectedCountry?.name || "",
        dialCode: selectedCountry?.dialCode || "",
        mobileNumber: formData.mobileNumber,
        purpose: formData.purpose,
        message: formData.message,
        year: new Date().getFullYear(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        country: "",
        mobileNumber: "",
        purpose: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-background border-border/50 p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-8 h-8 text-brand" />
              </motion.div>
              <h3 className="text-2xl font-serif text-foreground mb-3">
                Thank You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We've received your message and will get back to you shortly.
              </p>
              <Button
                onClick={handleClose}
                className="mt-8 bg-foreground text-background hover:bg-foreground/90"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="p-6 pb-0">
                <div className="w-12 h-0.5 bg-brand mb-4" />
                <DialogTitle className="text-2xl font-serif text-foreground">
                  Get in Touch
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Ready to explore opportunities? Let's start a conversation.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`bg-muted/50 border-border/50 focus:border-brand transition-colors ${
                      errors.fullName ? "border-destructive" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-muted/50 border-border/50 focus:border-brand transition-colors ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Country & Mobile - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium text-foreground">
                      Country
                    </Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger
                        className={`bg-muted/50 border-border/50 focus:border-brand ${
                          errors.country ? "border-destructive" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border max-h-60">
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <p className="text-xs text-destructive">{errors.country}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                      Mobile Number
                    </Label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-muted border border-r-0 border-border/50 rounded-l-md text-sm text-muted-foreground min-w-[60px] justify-center">
                        {selectedCountry?.dialCode || "+1"}
                      </div>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="1234567890"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, "") })
                        }
                        className={`bg-muted/50 border-border/50 focus:border-brand rounded-l-none transition-colors ${
                          errors.mobileNumber ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-xs text-destructive">{errors.mobileNumber}</p>
                    )}
                  </div>
                </div>

                {/* Purpose */}
                <div className="space-y-2">
                  <Label htmlFor="purpose" className="text-sm font-medium text-foreground">
                    Purpose of Contact
                  </Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                  >
                    <SelectTrigger
                      className={`bg-muted/50 border-border/50 focus:border-brand ${
                        errors.purpose ? "border-destructive" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      {purposes.map((purpose) => (
                        <SelectItem key={purpose} value={purpose}>
                          {purpose}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.purpose && (
                    <p className="text-xs text-destructive">{errors.purpose}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`bg-muted/50 border-border/50 focus:border-brand resize-none transition-colors ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 text-base font-medium transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, ShoppingCart, Shield } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Sasta-Ease website, you accept and agree to be bound by these Terms and Conditions.",
        "If you do not agree to abide by these terms, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to update these terms at any time without prior notice.",
        "Your continued use of the service after changes constitutes acceptance of the new terms."
      ]
    },
    {
      icon: ShoppingCart,
      title: "Use of Our Service",
      content: [
        "You must be at least 18 years old to use our service or have parental consent.",
        "You are responsible for maintaining the confidentiality of your account information.",
        "You agree to provide accurate, current, and complete information during registration.",
        "You may not use our service for any illegal or unauthorized purpose.",
        "You agree not to interfere with or disrupt the service or servers connected to the service."
      ]
    },
    {
      icon: Scale,
      title: "Orders and Payments",
      content: [
        "All orders are subject to acceptance and availability of products.",
        "We reserve the right to refuse or cancel any order for any reason.",
        "Prices are subject to change without notice, but changes will not affect existing orders.",
        "Payment must be received before products are shipped.",
        "We accept major credit cards and other payment methods as displayed on our site."
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our total liability will not exceed the amount paid for the specific product or service.",
        "We do not warrant that the service will be uninterrupted or error-free.",
        "You use our service at your own risk and discretion."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-6 text-sm text-background/80">
              Last updated: January 2025
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Welcome to Sasta-Ease</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with 
                the Sasta-Ease website (the "Service") operated by Sasta-Ease ("us", "we", or "our").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read these Terms and Conditions carefully before using our Service. Your access to and 
                use of the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-full flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {/* Shipping and Returns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Shipping and Returns</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Shipping Policy:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• We offer standard (5-7 business days) and express (2-3 business days) shipping</li>
                      <li>• Free shipping on orders over $50 within the continental United States</li>
                      <li>• International shipping is available to select countries</li>
                      <li>• Shipping costs are calculated at checkout based on destination and weight</li>
                      <li>• We are not responsible for delays caused by shipping carriers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Return Policy:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• Items may be returned within 30 days of delivery</li>
                      <li>• Items must be in original condition with all tags attached</li>
                      <li>• Customer is responsible for return shipping costs unless item is defective</li>
                      <li>• Refunds will be processed within 5-7 business days after we receive the return</li>
                      <li>• Some items may not be eligible for return due to hygiene or safety reasons</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Intellectual Property Rights</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Service and its original content, features, and functionality are and will remain the 
                    exclusive property of Sasta-Ease and its licensors. The Service is protected by copyright, 
                    trademark, and other laws.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• You may not reproduce, distribute, or create derivative works from our content</li>
                    <li>• All trademarks, logos, and brand names are the property of their respective owners</li>
                    <li>• You may not use our intellectual property without explicit written permission</li>
                    <li>• User-generated content remains your property, but you grant us a license to use it</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacy and Data */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Privacy and Data Protection</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                    protect your information when you use our Service.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• We collect only the information necessary to provide our services</li>
                    <li>• We do not sell or rent your personal information to third parties</li>
                    <li>• We use industry-standard security measures to protect your data</li>
                    <li>• You have the right to access, correct, or delete your personal information</li>
                    <li>• Please review our Privacy Policy for detailed information about our data practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Governing Law and Dispute Resolution</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of New York, 
                    without regard to its conflict of law provisions.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Any disputes will be resolved through binding arbitration</li>
                    <li>• You waive your right to participate in class action lawsuits</li>
                    <li>• Arbitration will be conducted in New York, NY</li>
                    <li>• Small claims court disputes are exempt from arbitration requirements</li>
                    <li>• The prevailing party may be entitled to attorney's fees and costs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Severability */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Severability and Entire Agreement</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining 
                    provisions will remain in full force and effect.
                  </p>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between 
                    you and Sasta-Ease regarding the use of our Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-hero text-background shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Questions About These Terms?</h3>
                <p className="text-background/90 leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, 
                  please contact us using the information below.
                </p>
                <div className="space-y-2 text-background/80">
                  <p><strong>Email:</strong> legal@sasta-ease.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Commerce Street, Business District, New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
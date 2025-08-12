import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, address)",
        "Payment information processed securely through our payment partners",
        "Order history and preferences to improve your shopping experience",
        "Device and browser information for security and optimization purposes",
        "Cookies and similar technologies to enhance site functionality"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders and provide customer support",
        "Send important updates about your orders and account",
        "Personalize your shopping experience and recommend products",
        "Improve our website, products, and services",
        "Comply with legal obligations and protect against fraud"
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        "We use industry-standard SSL encryption to protect your data",
        "Payment information is processed by PCI-compliant payment processors",
        "Regular security audits and monitoring of our systems",
        "Limited access to personal information on a need-to-know basis",
        "Secure data centers with physical and digital security measures"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, rent, or trade your personal information to third parties",
        "Trusted service providers who help us operate our business (shipping, payments)",
        "Legal authorities when required by law or to protect our rights",
        "Business transfers in the event of a merger or acquisition",
        "With your explicit consent for specific purposes"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sasta-Ease, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or make a purchase from us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, you consent to the data practices described in this policy. If you do not agree with 
                the practices described in this policy, please do not use our website.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Sections */}
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
          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Cookies and Tracking Technologies</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze site traffic, and understand where our visitors are coming from.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Types of cookies we use:</h4>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Essential cookies:</strong> Required for the website to function properly</li>
                      <li>• <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li>• <strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                      <li>• <strong>Preference cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                  </div>
                  <p>
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect the functionality of our website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Your Privacy Rights</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li>• <strong>Objection:</strong> Object to certain processing of your personal information</li>
                    <li>• <strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@sasta-ease.com. We will respond to your 
                    request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Children's Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal information, please contact us immediately so we 
                  can delete such information.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Changes to This Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we 
                  are protecting your information.
                </p>
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
                <h3 className="text-xl font-bold mb-4">Questions About This Policy?</h3>
                <p className="text-background/90 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact us.
                </p>
                <div className="space-y-2 text-background/80">
                  <p><strong>Email:</strong> privacy@sasta-ease.com</p>
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
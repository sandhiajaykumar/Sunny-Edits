import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          I AM READY TO CONSULT YOU
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-medium mb-2">My Name is</h3>
              <p className="text-gray-400">SUNNY</p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-2">I Am Interested In</h3>
              <p className="text-gray-400">Video Editing , Designing </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-primary">📞</span>
                <span className="text-white">+91 76720 07491</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-primary">📧</span>
                <span className="text-white">Bhimavaram , WG Dist , Andhra Pradesh </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-primary">📍</span>
                <span className="text-white">samteaminfo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" placeholder="Your name" />
              </div>
              
              <div>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" placeholder="Your email" />
              </div>
              
              <div>
                <Textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none" placeholder="Your message" />
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/80 text-white px-8 py-3 font-medium">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
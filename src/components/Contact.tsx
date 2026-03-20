import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-12 leading-none">
              Let's<br />Connect
            </h2>
            <p className="text-paper/60 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new creative collaborations.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "anshbirsalfhs@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91-7045602440" },
                { icon: MapPin, label: "Studio", value: "Mumbai, India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-paper/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <item.icon size={18} className="group-hover:text-ink transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-40">{item.label}</span>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-paper/5 p-8 md:p-12 rounded-[40px] border border-paper/10 flex flex-col items-center justify-center text-center"
          >
            <div className="max-w-sm">
              <h3 className="text-3xl font-display font-bold mb-6">Ready to start a project?</h3>
              <p className="text-paper/60 mb-10">
                The best way to reach me is directly via email. Click the button below to open Gmail and send me a message.
              </p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anshbirsalfhs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-accent text-ink rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent/90 transition-colors group"
              >
                Send Email via Gmail
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

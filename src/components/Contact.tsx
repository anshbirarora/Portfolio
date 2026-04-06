import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Trophy, Award, Star } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl mb-6">Achievements</h2>
              <p className="text-paper/40 max-w-xl">
                A track record of excellence. From early competitive wins to professional milestones, these achievements reflect a lifelong dedication to creative mastery and strategic thinking.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full border border-paper/10 text-xs font-bold uppercase tracking-widest">
                Milestones
              </div>
              <div className="px-6 py-3 rounded-full bg-accent text-ink text-xs font-bold uppercase tracking-widest">
                Legacy
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Talent Master", 
                year: "2016", 
                desc: "Won 10,000+ worth of prizes at Summer Champs Korum mall.",
                icon: Star,
                image: "https://i.ibb.co/JwY5tJhR/Whats-App-Image-2026-04-06-at-12-44-50-AM.jpg"
              },
              { 
                title: "Quiz Competition Champion", 
                year: "2017", 
                desc: "A foundational moment of excellence and quick thinking.",
                icon: Star,
                image: "https://i.ibb.co/YTVJLPK6/Whats-App-Image-2026-04-06-at-12-44-51-AM.jpg"
              },
              { 
                title: "Cooking Competition Winner", 
                year: "2018", 
                desc: "Won cooking competition hosted by Barbeque Nation at Korum mall.",
                icon: Trophy,
                image: "https://i.ibb.co/9mTr5Xtr/Whats-App-Image-2026-04-06-at-12-44-52-AM-1.jpg"
              },
              { 
                title: "SSC Board Ranker", 
                year: "10th Grade", 
                desc: "Scored 90+% in 10th SSC Board, being a ranker in class.",
                icon: Award,
                image: "https://i.ibb.co/bMxzQQws/Whats-App-Image-2026-04-06-at-12-44-38-AM.jpg"
              },
              { 
                title: "Graduation Achievement", 
                year: "Professional", 
                desc: "Receiving graduation from Lok Sabha Member Sri Ujjwal Nikam Sir.",
                icon: Award,
                image: "https://i.ibb.co/0pPQXLcZ/Whats-App-Image-2026-04-06-at-12-44-52-AM.jpg"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-paper/5 p-10 rounded-[32px] border border-paper/10 group hover:bg-accent hover:border-accent transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-8">
                  {item.image ? (
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-paper/10 group-hover:border-ink/20 transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-paper/5 flex items-center justify-center group-hover:bg-ink/10 transition-colors">
                      <item.icon size={24} className="text-accent group-hover:text-ink transition-colors" />
                    </div>
                  )}
                </div>
                <span className="block text-accent group-hover:text-ink/60 text-xs font-bold uppercase tracking-widest mb-2 transition-colors">
                  {item.year}
                </span>
                <h3 className="text-2xl mb-4 group-hover:text-ink transition-colors">{item.title}</h3>
                <p className="text-sm text-paper/40 group-hover:text-ink/60 leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-20 border-t border-paper/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-12 leading-none">
              Let's<br />Connect
            </h2>
            <p className="text-paper/60 text-lg mb-12 max-w-md">
              Ready to elevate your brand's visual narrative? Whether you have a specific project in mind or are looking for a long-term creative partner, I'm here to bring your vision to life. Let's build something exceptional together.
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

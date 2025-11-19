
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ProjectCard, ExperienceItem, SkillCategory } from './components/Diagrams';
import { ArrowDown, Menu, X, Mail, Phone, MapPin, Linkedin, Database, Layout, Code, Server, Award } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-nobel-gold rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">M</div>
            <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg leading-none transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                Mukesh Kumar
                </span>
                <span className="text-[10px] tracking-widest uppercase text-stone-500">SharePoint Developer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Skills</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Experience</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Projects</a>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')}
              className="px-5 py-2 bg-stone-900 text-white rounded-lg hover:bg-nobel-gold transition-colors shadow-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Skills</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Experience</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Projects</a>
            <a href="#contact" onClick={scrollToSection('contact')} className="text-nobel-gold font-bold">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroScene />
        
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 lg:order-1">
              <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50">
                Available for Opportunities
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6 text-stone-900 drop-shadow-sm">
                Mukesh Kumar <br/><span className="text-nobel-gold">Chaturvedi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-stone-600 font-light mb-8">
                SharePoint Developer & Power Platform Expert
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-xl">
                5+ years of experience designing and developing enterprise solutions with SharePoint Online, On-Premises, PowerApps, and React JS.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" onClick={scrollToSection('projects')} className="px-8 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl cursor-pointer">
                    View Projects
                </a>
                <a href="#contact" onClick={scrollToSection('contact')} className="px-8 py-3 bg-white border border-stone-200 text-stone-900 rounded-lg hover:border-nobel-gold hover:text-nobel-gold transition-colors shadow-sm cursor-pointer">
                    Contact Me
                </a>
              </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
             {/* Abstract Visual Representation of "Architecture" */}
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-nobel-gold/10 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full bg-white border-4 border-white shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-nobel-gold rounded-full mx-auto mb-4 flex items-center justify-center text-white font-serif text-4xl font-bold">M</div>
                        <h3 className="font-serif text-2xl font-bold text-stone-900">Mukesh Kumar</h3>
                        <p className="text-stone-500 text-sm uppercase tracking-wider mt-2">SharePoint Developer</p>
                        <div className="mt-6 flex gap-4 justify-center text-stone-400">
                            <Code size={20} />
                            <Database size={20} />
                            <Layout size={20} />
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
             <a href="#about" onClick={scrollToSection('about')} className="text-stone-400 hover:text-stone-900 transition-colors cursor-pointer">
                <ArrowDown size={24} />
             </a>
        </div>
      </header>

      <main>
        {/* About / Summary */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Professional Summary</div>
                <h2 className="font-serif text-4xl mb-8 text-stone-900">Building Robust Enterprise Solutions</h2>
                <div className="prose prose-lg text-stone-600 leading-relaxed">
                  <p className="mb-6">
                    With 5 years of experience in designing and developing SharePoint Online and On-Premises solutions, I specialize in PowerApps, Power Automate, REST API, and have a strong foundation in SPFX and React JS.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                      <ul className="space-y-3 list-disc pl-5">
                        <li>Good experience with OOTB Features and REST API.</li>
                        <li>Hands-on experience in Provisioning Site Columns, Content Types, and Hubs.</li>
                        <li>Expertise in Permission management for Lists and Webs.</li>
                        <li>Development of Web Parts, Visual Web Parts, and Client Web Parts.</li>
                        <li>Customization of Custom Lists and Master Pages.</li>
                      </ul>
                      <ul className="space-y-3 list-disc pl-5">
                         <li>Experience with SharePoint Framework (SPFx) and React JS.</li>
                         <li>Strong background in Power Apps (Canvas & Model-Driven) and Power Automate.</li>
                         <li>Migration experience (On-Premises to Online) using ShareGate and Microsoft tools.</li>
                         <li>Proficient in CSOM, JSOM, and SharePoint Installation/Configuration.</li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Expertise</div>
                    <h2 className="font-serif text-4xl text-stone-900">Technical Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCategory 
                        title="SharePoint"
                        icon={<Server size={24} />}
                        skills={[
                            "SharePoint Online (Office 365)", 
                            "SharePoint 2010/2013/2016", 
                            "SPFx", 
                            "Web Parts", 
                            "Master Pages",
                            "Migration (ShareGate)",
                            "CSOM / JSOM",
                            "Search & Permissions"
                        ]}
                    />
                     <SkillCategory 
                        title="Power Platform"
                        icon={<Layout size={24} />}
                        skills={[
                            "Canvas Apps", 
                            "Model Driven Apps", 
                            "Power Automate (Flow)", 
                            "Dataverse",
                            "Power BI (Basic)",
                            "Custom Connectors"
                        ]}
                    />
                    <SkillCategory 
                        title="Development"
                        icon={<Code size={24} />}
                        skills={[
                            "React JS", 
                            "HTML5 / CSS3", 
                            "JavaScript / jQuery", 
                            "C#", 
                            "REST API", 
                            "Visual Studio",
                            "MS SQL Server",
                            "SharePoint Designer"
                        ]}
                    />
                </div>
            </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 bg-white">
             <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Career Path</div>
                    <h2 className="font-serif text-4xl text-stone-900">Professional Experience</h2>
                </div>

                <div className="space-y-0">
                    <ExperienceItem 
                        company="MINDTEL GLOBAL Private Ltd"
                        role="Senior Software Engineer"
                        period="Oct 2024 - May 2025"
                    />
                    <ExperienceItem 
                        company="Damco Solution Private Ltd"
                        role="Software Engineer 1"
                        period="May 2023 - Aug 2024"
                    />
                    <ExperienceItem 
                        company="Orbex Technologies Private Ltd"
                        role="SharePoint Developer"
                        period="July 2019 - May 2023"
                        isLast={true}
                    />
                </div>
             </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Portfolio</div>
                    <h2 className="font-serif text-4xl text-stone-900">Key Projects</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <ProjectCard 
                        title="Islamic Development Bank"
                        description="Served as the primary SharePoint Administrator for On-Premise (2010 & 2016) environments, ensuring high availability and robust security. Managed critical departmental applications like IDGBNet (President's Briefing), overseeing secure access controls, performance optimization, and seamless application-level support in a high-stakes enterprise environment."
                        environment="SharePoint 2010/2016, Windows Server, Active Directory, IIS, PowerShell"
                        imageUrl="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop"
                        responsibilities={[
                            "Managed comprehensive administration for site collections, lists, libraries, and custom content types.",
                            "Implemented rigorous access control and permission management at site, list, and item levels.",
                            "Executed regular SharePoint patching, health monitoring, and performance tuning.",
                            "Collaborated directly with end-users and IT teams for requirement gathering and troubleshooting."
                        ]}
                    />
                    <ProjectCard 
                        title="Al Rustmani Group"
                        description="Spearheaded the design and development of a modern, responsive front page for the corporate SharePoint Online site. Focused on delivering a user-friendly interface that aligned strictly with company branding. Collaborated closely with content management teams to integrate dynamic content, significantly improving site navigation and user engagement."
                        environment="SharePoint Online, Power Automate"
                        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        responsibilities={[
                            "Developed a custom responsive front-end using specialized web parts.",
                            "Streamlined content publishing workflows using Power Automate for efficiency.",
                            "Optimized site performance and ensured cross-browser compatibility and accessibility.",
                            "Engineered Custom Event Receivers and Web Parts to meet specific organizational needs."
                        ]}
                    />
                    <ProjectCard 
                        title="'Team Talk' Implementation"
                        description="Led the 'Team Talk' series implementation using SharePoint Online to enhance team collaboration. Designed dedicated sites, integrated multimedia content, and automated workflows."
                        environment="SharePoint Online, Power Automate"
                        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        responsibilities={[
                            "SharePoint Online Site Design and Development.",
                            "Integrated multimedia content (recorded sessions).",
                            "Implemented workflows for session reminders and feedback.",
                            "Analyzed user engagement data."
                        ]}
                    />
                    <ProjectCard 
                        title="Resource Allocation Portal"
                        description="Application for deciding machine equipment replacement or assignment based on user needs and cost-effectiveness. Complex logic for approval and asset management."
                        environment="PowerApps, Power Automate, SharePoint Online"
                        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                        responsibilities={[
                            "Made responsive Canvas App with multiple screens.",
                            "Created approval/rejection workflows.",
                            "Automated workflows for Manager approvals.",
                            "Generated Invoices and maintained records in SharePoint Lists."
                        ]}
                    />
                    <ProjectCard 
                        title="Enterprise Portal"
                        description="Developed a comprehensive collaboration platform serving employees across Spain and Mexico. The solution integrates a central intranet for content management with a robust Project Management Portal. This portal tracks the entire project lifecycle—from creation to task approvals, risk management, and issue tracking—integrated deeply with SharePoint and Project Server workflows."
                        environment="SharePoint, Rest API, HTML, Event Receiver, Timer Job"
                        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                        responsibilities={[
                            "Designed complex workflows for Project Task tracking, Approvals, Risk & Issue management.",
                            "Customized forms and processes for three distinct project types with associated alerts.",
                            "Performed advanced CRUD operations and dynamic UI updates using REST API and ECMAScript.",
                            "Implemented Custom Event Receivers and Timer Jobs to automate backend logic."
                        ]}
                    />
                    <ProjectCard 
                        title="SharePoint Migration (2016 to Online)"
                        description="Migration project moving existing SharePoint 2016 environment to SharePoint Online cloud platform. Included data, lists, libraries, and workflow migration."
                        environment="SharePoint 2016, SharePoint Online, Sharegate"
                        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        responsibilities={[
                            "Responsible for migrating site collections and My Sites.",
                            "Customized SharePoint Online environment.",
                            "Tested and debugged migrated customizations.",
                            "Fixed issues arising from migration tools."
                        ]}
                    />
                </div>
           </div>
        </section>

        {/* Education */}
        <section className="py-20 bg-white border-t border-stone-100">
             <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Education</div>
                <h2 className="font-serif text-3xl mb-10 text-stone-900">Academic Background</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-[#F9F8F4] rounded-xl border border-stone-200 hover:shadow-xl hover:-translate-y-2 hover:border-nobel-gold transition-all duration-300 cursor-default group">
                        <div className="w-12 h-12 bg-stone-200 group-hover:bg-nobel-gold/20 transition-colors rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="text-stone-600 group-hover:text-nobel-gold transition-colors" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-stone-900">Master of Computer Application</h3>
                        <p className="text-stone-600 text-sm mb-2">Kanpur Institute of Technology, Kanpur, U.P.</p>
                        <p className="text-nobel-gold text-xs font-bold uppercase">July 2016 - August 2018</p>
                    </div>
                    <div className="p-6 bg-[#F9F8F4] rounded-xl border border-stone-200 hover:shadow-xl hover:-translate-y-2 hover:border-nobel-gold transition-all duration-300 cursor-default group">
                        <div className="w-12 h-12 bg-stone-200 group-hover:bg-nobel-gold/20 transition-colors rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="text-stone-600 group-hover:text-nobel-gold transition-colors" size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-stone-900">Bachelor Of Computer Application</h3>
                        <p className="text-stone-600 text-sm mb-2">Punjab Technical University</p>
                        <p className="text-nobel-gold text-xs font-bold uppercase">July 2012 - August 2015</p>
                    </div>
                </div>
             </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-stone-900 text-stone-300 py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-4xl text-white mb-6">Let's Work Together</h2>
                        <p className="text-lg text-stone-400 mb-8">
                            I am currently available for new opportunities. If you need a SharePoint expert to build robust enterprise solutions, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-nobel-gold">
                                    <Phone size={20} />
                                </div>
                                <span>7004047641</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-nobel-gold">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:mukeshchaturvedi.techsavvy@gmail.com" className="hover:text-white transition-colors">mukeshchaturvedi.techsavvy@gmail.com</a>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-nobel-gold">
                                    <Linkedin size={20} />
                                </div>
                                <a href="https://linkedin.com/in/mukesh-kumarchaturvedi9b6a27133" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors break-all">
                                    linkedin.com/in/mukesh-kumarchaturvedi...
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-nobel-gold">
                                    <MapPin size={20} />
                                </div>
                                <span>New Delhi, India</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
                        <h3 className="text-white font-serif text-2xl mb-6">Languages</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">English</span>
                                    <span className="text-xs text-stone-500">Professional</span>
                                </div>
                                <div className="w-full bg-stone-700 rounded-full h-2">
                                    <div className="bg-nobel-gold h-2 rounded-full" style={{width: '90%'}}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium">Hindi</span>
                                    <span className="text-xs text-stone-500">Native</span>
                                </div>
                                <div className="w-full bg-stone-700 rounded-full h-2">
                                    <div className="bg-nobel-gold h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-stone-700">
                            <h3 className="text-white font-serif text-2xl mb-4">Personal Details</h3>
                            <ul className="text-sm space-y-2 text-stone-400">
                                <li><strong className="text-stone-300">DOB:</strong> 20 Oct 1995</li>
                                <li><strong className="text-stone-300">Nationality:</strong> Indian</li>
                                <li><strong className="text-stone-300">Address:</strong> Siwan, Bihar, PIN-841239</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-stone-950 text-stone-600 py-8 border-t border-stone-900">
        <div className="container mx-auto px-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Mukesh Kumar Chaturvedi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

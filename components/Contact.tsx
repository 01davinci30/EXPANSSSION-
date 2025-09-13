import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS, QUOTE_PROCESS } from '../constants';
import { ChatBubbleBottomCenterTextIcon } from './icons/FeatureIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:p-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Contact Info */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-xl shadow-cyan-500/10 p-8">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6 tracking-wide">INFORMACIÓN DE CONTACTO</h2>
                <div className="space-y-4">
                    {CONTACT_INFO.map(item => {
                        const Icon = item.icon;
                        const content = (
                            <div className="flex items-center group">
                                <Icon className="h-6 w-6 text-cyan-400 mr-4"/>
                                <span className="text-slate-300 group-hover:text-white transition-colors">{item.value}</span>
                            </div>
                        );
                        return item.href ? (
                            <a key={item.type} href={item.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
                        ) : (
                            <div key={item.type}>{content}</div>
                        );
                    })}
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">REDES SOCIALES</h3>
                    <div className="flex space-x-4">
                        {SOCIAL_LINKS.map(social => {
                            const Icon = social.icon;
                            return (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                                    <Icon className="h-8 w-8"/>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right Side: Quote Process */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-fuchsia-500/20 rounded-lg shadow-xl shadow-fuchsia-500/10 p-8">
                <h2 className="text-3xl font-bold text-fuchsia-300 mb-6 tracking-wide">{QUOTE_PROCESS.title}</h2>
                <p className="text-slate-400 mb-4">{QUOTE_PROCESS.description}</p>
                <ul className="space-y-3 text-slate-300 list-none">
                    {QUOTE_PROCESS.steps.map((step, index) => (
                         <li key={index} className="flex items-start">
                            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" />
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-fuchsia-200/80 text-sm italic">{QUOTE_PROCESS.footer}</p>
            </div>
        </div>
    </section>
  );
};

export default Contact;
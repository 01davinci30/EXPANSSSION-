import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex flex-col transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 overflow-hidden h-full">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-cyan-400 mr-4"/>
                    <h3 className="text-xl font-bold text-cyan-300 tracking-wide">{service.title}</h3>
                </div>
                <ul className="space-y-3 text-slate-400 list-disc list-inside flex-grow">
                    {service.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-8 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-8 text-center tracking-wide">
          PORTAFOLIO DE SERVICIOS
        </h2>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map(service => <ServiceCard key={service.title} service={service} />)}
        </div>
    </section>
  );
};

export default Services;
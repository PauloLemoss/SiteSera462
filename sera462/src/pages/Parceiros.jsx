import React from 'react'
import imageEte from "../images/parceiros-bg.png"

function Parceiros(){
    return(
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="gradient-hero py-20">
                <div className="container-custom">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Nossos Parceiros
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Trabalhamos em conjunto com instituições educacionais de excelência 
                            para transformar a educação através da tecnologia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-medium">
                                <img 
                                    className="w-full h-auto object-cover" 
                                    src={imageEte} 
                                    alt="Instituições parceiras" 
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div className="card p-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Escola Técnica Estadual Professor Francisco Jonas Feitosa Costa
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Localizada em Arcoverde-PE, esta instituição é referência em educação técnica 
                                    e profissionalizante na região.
                                </p>
                                <div className="flex items-center text-primary font-semibold">
                                    <span>Arcoverde - PE</span>
                                </div>
                            </div>

                            <div className="card p-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Escola Técnica Estadual Arlindo Ferreira dos Santos
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Instituição de excelência em Sertânia-PE, comprometida com a formação 
                                    técnica de qualidade e inovação educacional.
                                </p>
                                <div className="flex items-center text-primary font-semibold">
                                    <span>Sertânia - PE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="section bg-white dark:bg-gray-800">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            Benefícios da Parceria
                        </h2>
                        <p className="section-subtitle">
                            Descubra como nossa parceria pode transformar sua instituição
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-6 text-center">
                            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Tecnologia Avançada
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Acesso às mais modernas ferramentas de gestão educacional
                            </p>
                        </div>

                        <div className="card p-6 text-center">
                            <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Suporte Especializado
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Equipe dedicada para implementação e treinamento
                            </p>
                        </div>

                        <div className="card p-6 text-center">
                            <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Resultados Comprovados
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Melhoria significativa na gestão e resultados educacionais
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Parceiros
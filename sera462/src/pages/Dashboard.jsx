import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import {
  ChartBarIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('students');
  const [timeRange, setTimeRange] = useState('month');

  // Dummy data for presentation
  const dummyData = {
    students: {
      labels: ['João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Lucas Ferreira', 'Julia Lima'],
      data: [85, 92, 78, 95, 88, 91],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
      ],
    },
    classes: {
      labels: ['Matemática 9ºA', 'Português 9ºA', 'História 9ºA', 'Ciências 9ºA', 'Geografia 9ºA'],
      data: [92, 88, 85, 90, 87],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ],
    },
    materials: {
      labels: ['Álgebra', 'Gramática', 'História do Brasil', 'Biologia', 'Geografia Física'],
      data: [89, 91, 84, 93, 86],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ],
    },
  };

  // Statistics cards data
  const statsData = [
    {
      title: 'Total de Questões',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: ChartBarIcon,
      color: 'bg-blue-500',
    },
    {
      title: 'Alunos Ativos',
      value: '156',
      change: '+5%',
      changeType: 'positive',
      icon: UserGroupIcon,
      color: 'bg-green-500',
    },
    {
      title: 'Turmas',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: AcademicCapIcon,
      color: 'bg-purple-500',
    },
    {
      title: 'Materiais',
      value: '45',
      change: '+8%',
      changeType: 'positive',
      icon: BookOpenIcon,
      color: 'bg-orange-500',
    },
  ];

  const barChartData = {
    labels: dummyData[selectedFilter].labels,
    datasets: [
      {
        label: 'Questões Respondidas',
        data: dummyData[selectedFilter].data,
        backgroundColor: dummyData[selectedFilter].backgroundColor,
        borderColor: dummyData[selectedFilter].backgroundColor.map(color => color.replace('0.8', '1')),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const pieChartData = {
    labels: dummyData[selectedFilter].labels,
    datasets: [
      {
        data: dummyData[selectedFilter].data,
        backgroundColor: dummyData[selectedFilter].backgroundColor,
        borderColor: dummyData[selectedFilter].backgroundColor.map(color => color.replace('0.8', '1')),
        borderWidth: 2,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Questões Respondidas por ${selectedFilter === 'students' ? 'Alunos' : selectedFilter === 'classes' ? 'Turmas' : 'Materiais'}`,
        color: 'rgb(107 114 128)',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'rgb(107 114 128)',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'rgb(107 114 128)',
          maxRotation: 45,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgb(107 114 128)',
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: `Distribuição por ${selectedFilter === 'students' ? 'Alunos' : selectedFilter === 'classes' ? 'Turmas' : 'Materiais'}`,
        color: 'rgb(107 114 128)',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard de Desempenho
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe o progresso dos alunos, turmas e materiais
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === 'positive'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      vs mês anterior
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filtrar por:
              </label>
              <div className="flex space-x-2">
                {[
                  { key: 'students', label: 'Alunos' },
                  { key: 'classes', label: 'Turmas' },
                  { key: 'materials', label: 'Materiais' },
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedFilter === filter.key
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Período:
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="form-select text-sm"
              >
                <option value="week">Última Semana</option>
                <option value="month">Último Mês</option>
                <option value="quarter">Último Trimestre</option>
                <option value="year">Último Ano</option>
              </select>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="card p-6">
            <div className="h-80">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="card p-6">
            <div className="h-80">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="card p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resumo Detalhado
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {selectedFilter === 'students' ? 'Aluno' : selectedFilter === 'classes' ? 'Turma' : 'Material'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Questões Respondidas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Taxa de Acerto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {dummyData[selectedFilter].labels.map((label, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {label}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {dummyData[selectedFilter].data[index]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {dummyData[selectedFilter].data[index]}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          dummyData[selectedFilter].data[index] >= 90
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : dummyData[selectedFilter].data[index] >= 80
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}
                      >
                        {dummyData[selectedFilter].data[index] >= 90
                          ? 'Excelente'
                          : dummyData[selectedFilter].data[index] >= 80
                          ? 'Bom'
                          : 'Precisa Melhorar'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

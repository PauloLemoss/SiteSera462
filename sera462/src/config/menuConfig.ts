export interface MenuItem {
  name: string;
  path: string;
  icon?: string;
  description?: string;
}

export interface MenuConfig {
  [role: string]: MenuItem[];
}

export const menuConfig: MenuConfig = {
  Student: [
    {
      name: "Profile",
      path: "/profile",
      icon: "UserCircleIcon",
      description: "View and edit your profile information"
    },
    {
      name: "Questionnaires",
      path: "/questionnaires",
      icon: "DocumentTextIcon",
      description: "Access and complete questionnaires"
    },
    {
      name: "Score",
      path: "/score",
      icon: "ChartBarIcon",
      description: "View your academic scores and grades"
    },
    {
      name: "Warnings",
      path: "/warnings",
      icon: "ExclamationTriangleIcon",
      description: "Check for any warnings or notifications"
    }
  ],
  Teacher: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "HomeIcon",
      description: "Overview of your teaching activities"
    },
    {
      name: "Questionnaires",
      path: "/questionnaires",
      icon: "DocumentTextIcon",
      description: "Create and manage questionnaires"
    },
    {
      name: "Students",
      path: "/students",
      icon: "AcademicCapIcon",
      description: "Search and manage student information"
    }
  ],
  Admin: [
    {
      name: "Profile",
      path: "/profile",
      icon: "UserCircleIcon",
      description: "View and edit your profile information"
    },
    {
      name: "Questionnaires",
      path: "/questionnaires",
      icon: "DocumentTextIcon",
      description: "Create and manage questionnaires"
    },
    {
      name: "Score",
      path: "/score",
      icon: "ChartBarIcon",
      description: "View academic scores and grades"
    },
    {
      name: "Warnings",
      path: "/warnings",
      icon: "ExclamationTriangleIcon",
      description: "Check for any warnings or notifications"
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "HomeIcon",
      description: "Administrative dashboard"
    },
    {
      name: "Students",
      path: "/students",
      icon: "AcademicCapIcon",
      description: "Search and manage student information"
    }
  ]
};

export const getMenuForRole = (role: string): MenuItem[] => {
  return menuConfig[role] || [];
};

export const isValidRole = (role: string): boolean => {
  return Object.keys(menuConfig).includes(role);
};

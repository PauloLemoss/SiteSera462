import { useAuth } from '../contexts/AuthContext';

export interface UserRoleInfo {
  role: string;
  isValid: boolean;
  displayName: string;
}

export const useUserRole = (): UserRoleInfo => {
  const { user } = useAuth();

  if (!user) {
    return {
      role: '',
      isValid: false,
      displayName: 'Não autenticado'
    };
  }

  // Extract role from user data
  // The role can come from different fields depending on the API response
  const role = user.Roller || user.role || user.roller || '';
  
  // Map English roles to Portuguese roles for menu configuration
  const roleMapping: { [key: string]: string } = {
    'Student': 'Estudante',
    'Teacher': 'Professor',
    'Admin': 'Admin',
    'Administrator': 'Admin'
  };
  
  // Normalize and map the role
  const normalizedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  const mappedRole = roleMapping[normalizedRole] || normalizedRole;
  
  // Map role to display name
  const roleDisplayNames: { [key: string]: string } = {
    'Student': 'Estudante',
    'Teacher': 'Professor',
    'Admin': 'Administrador',
    'Administrator': 'Administrador',
    'Estudante': 'Estudante',
    'Professor': 'Professor'
  };

  const displayName = roleDisplayNames[normalizedRole] || mappedRole;

  return {
    role: mappedRole,
    isValid: ['Estudante', 'Professor', 'Admin'].includes(mappedRole),
    displayName
  };
};

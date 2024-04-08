export type Skill = 'java' | 'python' | 'typescript' | 'aws' | 'c/c++';

export type Employee = {
  employeeNumber: number;
  name: string;
  kanaName: string;
  birthDate: string;
  imageUrl: string;
  ocupation: string;
  status: string;
  skill: Skill[];
};

export const mockEmployees: Employee[] = [
  {
    employeeNumber: 1,
    name: 'ASL太郎',
    kanaName: 'エーエスエルタロウ',
    birthDate: '1980-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['java', 'python'],
  },
  {
    employeeNumber: 2,
    name: 'ASL雅子',
    kanaName: 'エーエスエルマサコ',
    birthDate: '1982-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['java'],
  },
  {
    employeeNumber: 3,
    name: 'ASL美和',
    kanaName: 'エーエスエルミワ',
    birthDate: '1984-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['python', 'aws'],
  },
  {
    employeeNumber: 4,
    name: 'ASL隆太',
    kanaName: 'エーエスエルリュウタ',
    birthDate: '1986-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['typescript'],
  },
  {
    employeeNumber: 5,
    name: 'ASL麻衣',
    kanaName: 'エーエスエルマイ',
    birthDate: '1988-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['typescript', 'aws'],
  },
  {
    employeeNumber: 6,
    name: 'ASL健太郎',
    kanaName: 'エーエスエルケンタロウ',
    birthDate: '1990-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['java'],
  },
  {
    employeeNumber: 7,
    name: 'ASL彩香',
    kanaName: 'エーエスエルアヤカ',
    birthDate: '1992-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['python', 'java'],
  },
  {
    employeeNumber: 8,
    name: 'ASL大介',
    kanaName: 'エーエスエルダイスケ',
    birthDate: '1994-10-10',
    imageUrl: '',
    ocupation: 'pmo',
    status: 'backlog',
    skill: ['c/c++'],
  },
];

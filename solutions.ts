const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return value * multiplier;
  } else if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    if (value === true) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }
};

const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const newArrays = [...arrays].flat();
  return newArrays;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter((course) => {
    return course.isPublished && course.students >= minStudents;
  });
};



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error('Access Denied: Must be 18 or older'));
      return;
    }

    setTimeout(() => {
      resolve('Access Granted');
    }, 1000);
  });
};

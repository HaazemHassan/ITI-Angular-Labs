import { Injectable } from '@angular/core';

export interface User {
  id: number;
  imagePath: string;
  name: string;
  position: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      imagePath:
        'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'hazem hassan',
      position: 'Software Engineer',
      description: 'Experienced developer with expertise in web technologies',
    },
    {
      id: 2,
      imagePath:
        'https://static.vecteezy.com/system/resources/thumbnails/026/408/779/small_2x/woman-mobile-camera-home-emotion-person-selfie-blogger-phone-smartphone-photo.jpg',
      name: 'Sara Ali',
      position: 'UI/UX Designer',
      description: 'Creative designer passionate about user experience',
    },
    {
      id: 3,
      imagePath:
        'https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740',
      name: 'Mohamed Hassan',
      position: 'Project Manager',
      description: 'Skilled project manager with strong leadership abilities',
    },
    {
      id: 4,
      imagePath:
        'https://www.shutterstock.com/image-photo/fashion-industry-black-woman-designer-600nw-2235667567.jpg',
      name: 'Fatma Ibrahim',
      position: 'Data Analyst',
      description: 'Detail-oriented analyst with strong analytical skills',
    },
    {
      id: 5,
      imagePath:
        'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
      name: 'Omar Khaled',
      position: 'DevOps Engineer',
      description:
        'Infrastructure specialist focused on automation and deployment',
    },
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u.id !== user.id);
  }
}

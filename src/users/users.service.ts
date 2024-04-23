import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async userRegistration(userDTO: UserDTO) {
    const hashPassword = await bcrypt.hash(userDTO.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        firstName: userDTO.firstName,
        lastName: userDTO.lastName,
        phoneNumber: userDTO.phoneNumber,
        email: userDTO.email,
        permissionType: userDTO.permissionType,
        password: hashPassword,
      },
    });

    return {
      success: true,
      pasdsword: hashPassword,
      user: user,
      message: 'User registration Successfully',
    };
  }

  async getAllUsers() {
    const allUsers = await this.prismaService.user.findMany({
      where: {
        permissionType: 'ADMIN',
      },
    });
    return {
      success: true,
      message: 'User registration Successfully',
      users: allUsers,
    };
  }
}

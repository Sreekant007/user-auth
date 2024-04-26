import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  permissionType: string;
  @ApiProperty()
  password: string;
}

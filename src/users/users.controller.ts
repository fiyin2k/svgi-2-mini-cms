// import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { CreateUserDto } from './dto/create/create-user.dto';
import { UpdateUserDto } from './dto/update/update-user.dto';
import { User } from './models/user.entity';
import { UsersService } from './users.service';
import { FindOneParams } from './validators/params.validator';

@Controller('users')
export class UsersController {

    /**
     * 
     * @param usersService 
     * Inject userssService
     */
    constructor(private readonly usersService: UsersService) { }

    /**
     * 
     * @param createUserDto 
     * Handle Post request for create
     */
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        //console.log(JSON.stringify(createUserDto));
        return this.usersService.create(createUserDto);
    }

    /**
     * Handle Get request for find
     */
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    /**
     * 
     * @param id 
     * Handle Get request for find by id
     */
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    /**
     * 
     * @param id id of user to be updated
     * @param updateUserDto new content
     * Handle Put request for 
     */
    @Put(':id')
    partialUpdate(@Param('id') id: FindOneParams, @Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.usersService.update1(id, updateUserDto);
    }

    /**
     * 
     * @param user 
     * Non-partial update. Takes a full user without param.
     */
    @Put()
    update(@Body() user: User): Promise<User> {
        return this.usersService.update2(user);
    }
}




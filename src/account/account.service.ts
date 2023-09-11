import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { SeleniumService } from 'src/selenium/selenium.service';

@Injectable()
export class AccountService {
  constructor(private seleniumService: SeleniumService) {}

  async login(loginUserData: LoginUserDto) {
    const { id, password } = loginUserData;
    await this.seleniumService.initialize(null);
    await this.seleniumService.login(id, password);
    await this.seleniumService.goToCart();
    await this.seleniumService.selectAllItemsInCart();
    await this.seleniumService.clickBuyButton();
    await this.seleniumService.clickPayButton();
    return 'success';
  }
}

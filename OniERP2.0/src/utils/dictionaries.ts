import { DrinksType, DessertType, MacaronsEnum, ZephyrEnum, PartnersEnum, CakesEnum } from './types';

export const DrinksDict: { [id: string] : Array<string> } = {};
DrinksDict[DrinksType.Cappucino] = ['175 мл', '340 мл'];
DrinksDict[DrinksType.Latte] = ['250 мл', '340 мл', '400 мл'];
DrinksDict[DrinksType.FlatWhite] = ['175 мл'];
DrinksDict[DrinksType.Raf] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.Americano] = ['120 мл'];
DrinksDict[DrinksType.AmericanoMilk] = ['120 мл'];
DrinksDict[DrinksType.LongBlack] = ['200 мл'];
DrinksDict[DrinksType.Espresso] = ['30 мл'];
DrinksDict[DrinksType.Doppio] = ['60 мл'];
DrinksDict[DrinksType.Machiato] = ['90 мл'];
DrinksDict[DrinksType.LatteLavender] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.LatteCaramel] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.LatteOrange] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.Cacao] = ['250 мл', '340 мл'];
DrinksDict[DrinksType.TeaGreen] = ['400 мл'];
DrinksDict[DrinksType.TeaBlack] = ['400 мл'];
DrinksDict[DrinksType.TeaHerbal] = ['400 мл'];
DrinksDict[DrinksType.SpeacialTeaPearLime] = ['400 мл'];
DrinksDict[DrinksType.SpecialTeaOrange] = ['400 мл'];
DrinksDict[DrinksType.SpecialTeaGinger] = ['400 мл'];
DrinksDict[DrinksType.HotChocolate] = ['175 мл'];
DrinksDict[DrinksType.LemonadeStrawberry] = ['400 мл'];
DrinksDict[DrinksType.LemonadeCitrus] = ['400 мл'];
DrinksDict[DrinksType.LemonadePassion] = ['400 мл'];
DrinksDict[DrinksType.IceLatte] = ['400 мл'];
DrinksDict[DrinksType.Syrop] = ['0 мл'];

export const DessertsDict: { [id: string] : Array<any> } = {};
DessertsDict[DessertType.Macaron] = [1, 6, 12, 24];
DessertsDict[DessertType.Zephyr] = [1, 8, 16];
DessertsDict[DessertType.Cake] = ['18 см', '22 см'];

export const DrinkPricesDict: { [id: string] : Array<number> } = {};
DrinkPricesDict[DrinksType.Cappucino] = [25, 40];
DrinkPricesDict[DrinksType.Latte] = [28, 35, 45];
DrinkPricesDict[DrinksType.FlatWhite] = [35];
DrinkPricesDict[DrinksType.Raf] = [38, 45];
DrinkPricesDict[DrinksType.Americano] = [20];
DrinkPricesDict[DrinksType.AmericanoMilk] = [22];
DrinkPricesDict[DrinksType.LongBlack] = [30];
DrinkPricesDict[DrinksType.Espresso] = [20];
DrinkPricesDict[DrinksType.Doppio] = [30];
DrinkPricesDict[DrinksType.Machiato] = [22];
DrinkPricesDict[DrinksType.LatteLavender] = [32, 40];
DrinkPricesDict[DrinksType.LatteCaramel] = [32, 40];
DrinkPricesDict[DrinksType.LatteOrange] = [32, 40];
DrinkPricesDict[DrinksType.Cacao] = [28, 35];
DrinkPricesDict[DrinksType.TeaGreen] = [25];
DrinkPricesDict[DrinksType.TeaBlack] = [25];
DrinkPricesDict[DrinksType.TeaHerbal] = [25];
DrinkPricesDict[DrinksType.SpeacialTeaPearLime] = [35];
DrinkPricesDict[DrinksType.SpecialTeaOrange] = [35];
DrinkPricesDict[DrinksType.SpecialTeaGinger] = [35];
DrinkPricesDict[DrinksType.HotChocolate] = [55];
DrinkPricesDict[DrinksType.LemonadeStrawberry] = [35];
DrinkPricesDict[DrinksType.LemonadeCitrus] = [35];
DrinkPricesDict[DrinksType.LemonadePassion] = [35];
DrinkPricesDict[DrinksType.IceLatte] = [40];
DrinkPricesDict[DrinksType.Syrop] = [5];

export const CaffeePrices: { [id: string] : number } = {};
CaffeePrices[PartnersEnum.CoffeeIs] = 17;
CaffeePrices[PartnersEnum.FirstPoint] = 19;
CaffeePrices[PartnersEnum.CubaCoffee] = 19;
CaffeePrices[PartnersEnum.Progress] = 20;
CaffeePrices[PartnersEnum.KlassnaKava] = 19;
CaffeePrices[PartnersEnum.IlMio] = 19;
CaffeePrices[PartnersEnum.StudioCoffee] = 20;
CaffeePrices[PartnersEnum.Ptaha] = 20;
CaffeePrices[PartnersEnum.StarKava] = 19;
CaffeePrices[PartnersEnum.Parle] = 20;
CaffeePrices[PartnersEnum.LiaDezi] = 20;
CaffeePrices[PartnersEnum.Journalist] = 20;
CaffeePrices[PartnersEnum.Biblecoffee] = 20;

export const CakesPricesDict: { [id: string] : Array<number> } = {};
CakesPricesDict[CakesEnum.CarrotCake] = [650, 980];
CakesPricesDict[CakesEnum.Pink] = [630, 970];
CakesPricesDict[CakesEnum.Infinity] = [640, 970];
CakesPricesDict[CakesEnum.Rio] = [630, 970];
CakesPricesDict[CakesEnum.Soul] = [620, 960];

export const ZEPHYR_PRICE = 15;
export const ZEPHYR_PARTNERS_PRICE = 11;

export const MACARONS_PRICE = 28;

export const CHOUX_PRICE = 40;

export const CHEESECAKE_PRICE = 75;

export const MacaronsColors: { [id: string] : string } = {};
MacaronsColors[MacaronsEnum.DorBluePear] = '#b7e4f7';
MacaronsColors[MacaronsEnum.ParmesanFigue] = '#fcf7e8';
MacaronsColors[MacaronsEnum.StrawberryCheesecake] = '#ffdddd';
MacaronsColors[MacaronsEnum.Raspberry] = '#ffa5cf';
MacaronsColors[MacaronsEnum.CherryTonko] = '#B21E27';
MacaronsColors[MacaronsEnum.Oblepiha] = '#F0C130';
MacaronsColors[MacaronsEnum.Currant] = '#bc45c6';
MacaronsColors[MacaronsEnum.LavenderBlackberry] = '#b587ff';
MacaronsColors[MacaronsEnum.MangoPassion] = '#ffdd87';
MacaronsColors[MacaronsEnum.CoffeeCaramel] = '#a87301';
MacaronsColors[MacaronsEnum.Chocolate] = '#853c13';
MacaronsColors[MacaronsEnum.Pistachio] = '#85dd93';
MacaronsColors[MacaronsEnum.LimeBasil] = '#9ff25c';
MacaronsColors[MacaronsEnum.MandarinVanil] = '#FF8200';
MacaronsColors[MacaronsEnum.GrapefruitRose] = '#CB5382';

export const ZephyrColors: { [id: string] : string } = {};
ZephyrColors[ZephyrEnum.Apple] = '#fffbf2';
ZephyrColors[ZephyrEnum.ApricotPassionFruit] = '#ffe6bf';
ZephyrColors[ZephyrEnum.Currant] = '#d978еd';
ZephyrColors[ZephyrEnum.StrawberryCranberry] = '#f497b9';

export const DATE_FORMAT = 'DD.MM.YYYY HH:mm';
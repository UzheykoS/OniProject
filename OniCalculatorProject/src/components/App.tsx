import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Select, Button, Checkbox, Input, RadioButton, Busy, NotificationContainer, NotificationType, MultilineInput } from "altareturn-ui-controls";
import Ingredient from "../models/Ingredient"
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Moment = require("moment")

let recipes = require('../recipes.json')
let ingredients = require('../ingredients.json')

var FileSaver = require('../FileSaver.js')

interface IAppState {
    ingredients?: Array<Ingredient>;
    recipes?: Array<Recipe>;
}

export class App extends React.Component<any, IAppState>{
    constructor(props) {
        super(props);

        this.state = {
            ingredients: ingredients || [],
            recipes: recipes || []
        }
    }

    componentDidMount() {
    }

    readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == 200) {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    onSaveIngredientsClick = () => {
        const { ingredients } = this.state;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "/save/ingredients");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(ingredients));

        xmlhttp.onreadystatechange = () => {            
            if (xmlhttp.readyState != 4) return;

            debugger;
            
            if (xmlhttp.status != 200) {
                alert(xmlhttp.status + ': ' + xmlhttp.statusText);
            } else {
                alert(xmlhttp.responseText);
            }

        }
    }

    onSaveRecipesClick = () => {
        const { recipes } = this.state;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "/save/recipes");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(recipes));

        xmlhttp.onreadystatechange = () => {            
            if (xmlhttp.readyState != 4) return;

            debugger;
            
            if (xmlhttp.status != 200) {
                alert(xmlhttp.status + ': ' + xmlhttp.statusText);
            } else {
                alert(xmlhttp.responseText);
            }

        }
    }

    onChange = (item) => {
        if (item) {
            console.log(item);
        } else {
            console.log("no value");
        }
    }

    onIngredientButtonClick = () => {
        const { ingredients } = this.state;

        ingredients.push(new Ingredient("TestIngredient", ingredients.length > 0 ? ingredients[ingredients.length - 1].Id : null));

        this.setState({
            ingredients
        })
    }

    onRecipeButtonClick = () => {
        const { recipes, ingredients } = this.state;

        let recipe = new Recipe("TestRecipe", recipes.length > 0 ? recipes[recipes.length - 1].Id : null);
        if (!!ingredients && ingredients.length > 1) {
            let subRecipe = new SubRecipe("TestSubRecipe");

            subRecipe.IngredientsToQty[ingredients[0].Name] = { Qty: 100, Desc: "test desc" };
            subRecipe.IngredientsToQty[ingredients[1].Name + "1"] = { Qty: 250, Desc: "test desc 2" };

            recipe.SubRecipes.push(subRecipe);
        }

        recipes.push(recipe);

        this.setState({
            recipes
        })
    }

    render() {
        const { ingredients, recipes } = this.state;
        let options: Array<string> = ["test1", "test2", "test3"]

        return <div>
            APP
            <div style={{ width: "200px" }}>
                <Select
                    showClear={true}
                    defaultValue={(i: Array<string>) => i.filter(el => el === "test3")}
                    isMultiple={false}
                    options={options}
                    onChange={this.onChange}
                    class="dd1" />
                <br />
                <Button class="B1C" text="Add Ingredient" onClick={this.onIngredientButtonClick} />
                <br />
                <Button class="B1B" text="Add Recipe" onClick={this.onRecipeButtonClick} />
                <br />
                <Button class="B1A" text="Save Ingredients" onClick={this.onSaveIngredientsClick} />
                <br />
                <Button class="B1A" text="Save Recipes" onClick={this.onSaveRecipesClick} />
            </div>
            <br />
            Ingredients:
            {ingredients.map(i => {
                return <div key={i.Id}>
                    {"Name = " + i.Name + ", Id = " + i.Id}
                </div>;
            })}
            <br />
            Recipes:
            {recipes.map(r => {
                return <div key={r.Id}>
                    {"Name = " + r.Name + ", Id = " + r.Id + ", Ingredients = " + Object.keys(r.SubRecipes[0].IngredientsToQty).toString()}
                </div>;
            })}
        </div>;
    }
};
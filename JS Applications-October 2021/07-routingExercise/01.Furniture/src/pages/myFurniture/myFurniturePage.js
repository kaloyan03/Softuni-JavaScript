import { myFurnitureTemplate } from "./myFurnitureTemplate.js";
import furnitureService from '../../services/furnitureService.js';
import authService from "../../services/authService.js";

async function viewPage(context) {
    let userFurnitures = await furnitureService.getUserDashboards(authService.getUserId());
    let templateResult = myFurnitureTemplate(Object.values(userFurnitures));
    context.renderView(templateResult);
}

let myFurniturePage = {
    viewPage,
}

export default myFurniturePage;
import { dashboardTemplate } from "./dashboardTemplate.js";
import furnitureService from "../../services/furnitureService.js";

async function viewPage(context) {
    let furnituresResult = await furnitureService.getDashboards()
    let templateResult = dashboardTemplate(Object.values(furnituresResult));
    context.renderView(templateResult);

}

let dashboardPage = {
    viewPage,
}

export default dashboardPage;
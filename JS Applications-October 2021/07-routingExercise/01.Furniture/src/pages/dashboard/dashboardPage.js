import { dashboardTemplate } from "./dashboardTemplate.js";
import furnitureService from "../../services/furnitureService.js";

function viewPage(context) {
    furnitureService.getDashboards().then(result => {
        let templateResult = dashboardTemplate(Object.values(result));
        context.renderView(templateResult)
    })
}

let dashboardPage = {
    viewPage,
}

export default dashboardPage;
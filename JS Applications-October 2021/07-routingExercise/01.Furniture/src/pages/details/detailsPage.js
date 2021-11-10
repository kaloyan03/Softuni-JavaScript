import { detailsTemplate } from "./detailsTemplate.js";
import furnitureService from '../../services/furnitureService.js';
import authService from "../../services/authService.js";


async function deleteHandler(context, id, e) {
    let result = await furnitureService.deleteDashboard(id)
    context.page.redirect('/dashboard');
}


async function viewPage(context) {
    let id = context.params['id'];
    let deleteFunc = deleteHandler.bind(null, context, id);
    let detailsResult = await furnitureService.getDashboard(id);
    detailsResult['img'] = detailsResult['img'].startsWith('.') ? detailsResult['img'].substring(1) : detailsResult['img'];
    let isOwner = authService.getUserId() == detailsResult['_ownerId'];

    let templateResult = detailsTemplate(detailsResult, deleteFunc, isOwner);
    context.renderView(templateResult);
}

let detailsPage = {
    viewPage,
}

export default detailsPage;
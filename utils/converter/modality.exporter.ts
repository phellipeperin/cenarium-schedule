import { Modality } from '../../interfaces';
import { escapeHtml } from '../html';

export const exportModalities = (modalities: Array<Modality>): string => {
  let html = getModalityExportHeader();
  modalities.forEach((modality) => {
    html += getModalityOption(modality);
  })
  html += getModalityExportFooter();
  return escapeHtml(html);
};

const getModalityExportHeader = (): string => ('<select id="selectModalidade"><option selected="selected" value="ALL">Todas</option>');
const getModalityExportFooter = (): string => ('</select>');
const getModalityOption = (modality: Modality): string => (`<option value="${modality.key.toUpperCase()}">${modality.name}</option>`);
import { ClassSchedule, Modality, TimeSchedule, WeekDay } from '../../interfaces';
import { escapeHtml } from '../html';
import { generateAllowedTimes } from '../time';
import { translateDayPeriodTableName, translateWeekDay, translateWeekDayTableName } from '../translator';

const weekdays = Object.values(WeekDay);

export const exportSchedule = (classSchedule: Array<ClassSchedule>, modalities: Array<Modality>): string => {
  let html = getScheduleTableHeader();
  
  const allowedTimes = generateAllowedTimes();
  allowedTimes.forEach((time) => {
    html += getTableTimeLine(time, classSchedule, modalities);
  });

  html += getScheduleClosingTable();
  return escapeHtml(html);
};

const getScheduleTableHeader = (): string => ('<div class="table-2"><table id="tableHorarios" width="100%"><thead><tr><th class="HORA">Hora Início</th><th class="SEGUNDA" style="text-align: center !important;">Segunda</th><th class="TERCA" style="text-align: center !important;">Terça</th><th class="QUARTA" style="text-align: center !important;">Quarta</th><th class="QUINTA" style="text-align: center !important;">Quinta</th><th class="SEXTA" style="text-align: center !important;">Sexta</th><th class="SABADO" style="text-align: center !important;">Sábado</th></tr></thead><tbody><tr class="linha-no-results" style="display: none;"><td colspan="8">Nenhuma aula encontrada. Tente mudar o filtro.</td></tr>');
const getScheduleClosingTable = (): string => ('</tbody></table></div>');

const getTableTimeLine = (time: TimeSchedule, classSchedule: Array<ClassSchedule>, modalities: Array<Modality>): string => {
  let html = `<tr class="linha-visivel ${translateDayPeriodTableName(time.period)}"><td class="HORA">${time.time}</td>`;
  weekdays.forEach((weekday: WeekDay) => {
    const filteredSchedule = classSchedule.filter((schedule) => schedule.startingTime === time.time && schedule.daysOfWeek.includes(weekday));
    html += `<td class="${translateWeekDayTableName(weekday)}">${filteredSchedule.map((schedule) => getScheduleEntry(schedule, modalities.find((modality) => modality.id === schedule.modalityId)))}</td>`;
  });
  html += '</tr>';
  return html;
};

const getScheduleEntry = (classSchedule: ClassSchedule, modality?: Modality): string => {
  if (!modality) return '';
  let html = `<div class="horario-visivel horario-turma horario-turma-${modality.key}"`;
  html += ` title="<b>Idade:</b> ${classSchedule.ageGroup}<br><b>Dias:</b> ${classSchedule.daysOfWeek.map((day) => translateWeekDay(day)).join(', ')}<br><b>Horário:</b> ${classSchedule.startingTime} - ${classSchedule.endingTime}<br><b>Professor:</b> ${classSchedule.teacher}"`;
  html += ` style="background-color: ${modality.color};">`
  html += `<p class="modalidade">${modality.name}</p>`;
  if (classSchedule.extraInfo) {
    html += `<p class="nivel">${classSchedule.extraInfo}</p>`;
  }
  if (classSchedule.extraInfo2) {
    html += `<p class="nivel">${classSchedule.extraInfo2}</p>`;
  }
  html += '</div>';
  return html;
};
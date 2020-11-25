function fixTerminalHeight() {
  const windowHeight = $(window).height();
  const terminalBegin = $('.terminal').offset().top;
  const bottomSpace = 48;
  const terminalHeight = windowHeight - terminalBegin - bottomSpace;
  $('.terminal').height(`${terminalHeight}px`);
}

function setupWebSocket() {
  const url = $('.terminal').data('wsuri');
  const ws = new WebSocket(url);
  ws.onmessage = (event) => {
    log(event.data);
  };
  ws.onopen = () => {
    log('\nCONNECT');
  };
  ws.onclose = () => {
    log('DISCONNECT');
  };
}

function log(message) {
  $('#shell').append(`${message}\n`);
  scrollTerminalToBottom();
}

function scrollTerminalToBottom() {
  $('.terminal').scrollTop($('.terminal').prop('scrollHeight'));
}

$(window).on('resize', () => {
  fixTerminalHeight();
});

$(document).ready(() => {
  fixTerminalHeight();
  setupWebSocket();
});


// TODO: DELETE:

const BASE_SOCKET_URL = 'ws://localhost/api/';
const VERBOSE = true;
const DEFAULT_TOOL = 'Deploy';

function getGetParam(paramName) {
  let result = DEFAULT_TOOL; let
    tmp = [];
  location.search.substr(1).split('&').forEach((item) => {
    tmp = item.split('=');
    if (tmp[0] === paramName) {
      result = decodeURIComponent(tmp[1]);
    }
  });
  return result;
}

function sanitizedTool(tool) {
  return tool.replace(' ', '').toLowerCase();
}

function log(message) {
  $('#shell').append(`${message}\n`);
  $('.pre-scrollable').scrollTop($('.pre-scrollable').prop('scrollHeight'));
}

function clear() {
  $('#shell').text('');
}

$(document).ready(() => {
  // const tool = getGetParam('tool');
  // const saneTool = sanitizedTool(tool);
  // setupWebSocket(BASE_SOCKET_URL + saneTool);
  console.log('tool site');
});

$('#btn-run-task').click(() => {
  // const tool = getGetParam('tool');
  // const saneTool = sanitizedTool(tool);
  // clear();
  // setupWebSocket(`${BASE_SOCKET_URL}${saneTool}/task`);
});

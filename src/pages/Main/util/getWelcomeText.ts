const getWelcomeText = () => {
  var curHour = new Date().getHours();

  if (curHour < 12) {
    return 'დილამშვიდობის!';
  } else if (curHour < 18) {
    return 'შუადღემშვიდობის!';
  } else {
    return 'საღამომშვიდობის!';
  }
};

export default getWelcomeText;

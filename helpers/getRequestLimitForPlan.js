function getRequestLimitForPlan(plan) {
    switch (plan) {
      case 'basic':
        return 10;
      case 'intermediate':
        return 20;
      case 'ultimate':
        return 50;
      default:
        return 0;
    }
}

export default getRequestLimitForPlan;
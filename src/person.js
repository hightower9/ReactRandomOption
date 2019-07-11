const isAdult  = (x) => {
    if (x>=18)
    return 'Adult';
    else
    return 'Minor';
}

export const canDrink = (x) => {
    if (x>=21)
    return 'Can Drink';
    else
    return 'Cannot Drink';
}

export { isAdult }
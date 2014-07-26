function variables(variables){
    console.log("My name: " + variables[0] + " //type is " + typeof variables[0] +
        "\nMy age: " + variables[1] + " //type is " + typeof variables[1] +
        "\nI am male: "+ variables[2]+" //type is "+typeof variables[2] +
        "\nMy favorite foods are: " + variables[3] + " //type is " + typeof variables[3]);
}
variables(['Pesho', 22, true, ['fries', 'banana', 'cake']]);
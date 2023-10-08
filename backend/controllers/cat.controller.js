let cats = ["Fluffy"];

exports.create = (req, res) => {
    res.send(req.params)
    cats.push(req.params.name)
}

exports.read = (req, res) => {
    console.log(req.user)
    res.send(cats)
}

exports.update = (req, res) => {
    const newName = req.params.newName;
    const catIndex = cats.findIndex((cat) => cat === newName);

    if(catIndex !== -1){
        cats[catIndex] = `${newName}*`;
        res.send(`Nimi muudetud ${catIndex}`)
    }else{
        res.status(404).send('Nime ei leitud')
    }
}

exports.delete = (req, res) => {
    const catIndex = req.params.index;
    if (catIndex >= 0 && catIndex < cats.length) {
        const deletedCat = cats.splice(catIndex, 1);
        res.send(`Kass kustutatud: ${deletedCat}`);
      } else {
        res.status(404).send("Kassi ei leitud");
      }
}
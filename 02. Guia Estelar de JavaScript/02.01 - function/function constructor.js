{
    function Person(name) {
        this.name = name
        this.walk = function() {
            return this.name + `está andando`
        }
    }
    const maykel = new Person(`Maykel`)
    const vitoria = new Person(`Vitória`)
    console.log(maykel.walk())
    console.log(vitoria.walk())
}
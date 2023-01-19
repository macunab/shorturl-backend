import mongoose from "mongoose"

class DbInit {

    connect = (url: string) => {
        mongoose.connect(url)
            .then(() => console.log('The db was connected successfully'))
            .catch(() => console.log('Ups an error ocurred while tryng connect to the DB'));
    }
}

export default new DbInit();
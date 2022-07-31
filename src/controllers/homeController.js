

let getHomePage = (req, res) => {
    return res.render('home.ejs')
}

export { getHomePage as default, }

// module.exports = {
//     getHomePage: getHomePage,

// }
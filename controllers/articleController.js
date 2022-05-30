const Article = require('../models/Article')
const User = require('../models/User')

const getArticles = async(req, res) => {
  try {
    const articles = await Article.find()
    res.render('index',{articles})
  } catch(err) {
    console.log(err.message)
  }
}

const getArticle = async(req, res) => {
  try{
    const articleId = req.params.id
    const article = await Article.findById(articleId).populate('user')
    res.render('articleDetails', {article})
  } catch(err) {
    console.log(err.message)
  }
}

const addArticle = async (req, res) => {
  try {
    const {title, description} = req.body
    const userId = req.params.id
    const user = await User.findById(userId)
    const article = await Article.create({
      title,
      description,
      user
    })
    user.articles.push(article)
    await user.save()
    res.redirect('back');
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = {
  getArticles,
  getArticle,
  addArticle
}
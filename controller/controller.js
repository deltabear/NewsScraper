// Require packages
var express = require("express");
var router = express.Router();
var path = require("path");

var request = require("request");
var cheerio = require("cheerio");

// Require routes and API
var Comment = require("../models/Comment.js");
var Article = require("../models/Article.js");
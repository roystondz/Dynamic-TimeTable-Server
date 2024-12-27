const express = require('express');
const studentModel = require('../models/student-model');
const jwt = require("jsonwebtoken");
const cookieParser =  require("cookie-parser");
const bcrypt = require('bcrypt');

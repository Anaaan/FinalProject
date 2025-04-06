import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/seccret'
import User from '../models/User'
import UserService from '../services/userServices'
import { BadRequestError, NotFoundError } from '../helpers/apiError'

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, firstName, lastName, isAdmin, image } =
      req.body

    const hasUserMail = await UserService.findUserByEmail(email)
    const hasUserName = await UserService.findUserByUsername(username)

    if (hasUserName || hasUserMail)
      return res.status(400).json({ error: 'User already exists' })
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      isAdmin,
      image,
    })

    await UserService.createUser(user)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body
    const user = await UserService.findUserByEmail(email)
    if (!user) {
      return next(new NotFoundError('E-Mail address does not exist'))
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) {
      return next(new BadRequestError('Incorrect password'))
    }

    const loginToken = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: '24h' }
    )
    res.json({ loginToken, user })
  } catch (error) {
    next(error)
  }
}

// GET /users
export const findUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findUsers())
  } catch (error) {
    next(error)
  }
}

//GET specific user /user/:id
export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findUserById(req.params.userId))
  } catch (error) {
    next(error)
  }
}

//GET specific user by Username
export const findUserByUserName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findUserByUsername(req.params.username))
  } catch (error) {
    next(error)
  }
}

//PUT update specific user /users/:id
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.updateUser(req.params.userId, req.body)
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}

//DELETE user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.deleteUser(req.params.userId))
  } catch (error) {
    next(error)
  }
}

// PATCH ADD Investment to User
export const addInvestmentToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.addInvestmentToUser(
      req.params.userId,
      req.params.investmentId
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}

// PATCH ADD Income to User
export const addIncomeToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.addIncomeToUser(
      req.params.userId,
      req.params.incomeId
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}

// PATCH ADD Expense to User
export const addExpenseToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.addExpenseToUser(
      req.params.userId,
      req.params.expenseId
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}

// PATCH ADD Budget to User
export const addBudgetToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.addBudgetToUser(
      req.params.userId,
      req.params.budgetId
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}

// PATCH ADD Image to User
export const addImageToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UserService.addImageToUser(
      req.params.userId,
      req.params.imageId
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
}
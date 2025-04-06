// import { Request, Response, NextFunction } from 'express'
// import Budget from '../../models/Budget'
// import budgetService from '../../services/budgetServices'
// import addBudgetToUser from '../../services/userServices'
// import { BadRequestError } from '../../helpers/apiError'
// import userServices from '../../services/userServices'

// // POST /budget
// export const addBudget = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { title, amount, tag, comments } = req.body
//     const userId = req.params.userId
//     const budget = new Budget({
//       title,
//       amount,
//       tag,
//       comments,
//     })

//     await budgetService.addBudget(budget)
//     res.json(budget)

//     const budgetId = budget._id as string

//     await userServices.addBudgetToUser(userId, budgetId)
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET all budget /budget
// export const findBudget = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await budgetService.findBudget())
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET single budget by id /budget/:budgetId
// export const getBudgetById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await budgetService.getBudgetById(req.params.budgetId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// //UPDATE single budget /budget/:budgetId

// export const updateBudget = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const updateBudgetData = req.body
//     const budgetId = req.params.budgetId
//     const updatedBudget = await budgetService.updateBudget(
//       budgetId,
//       updateBudgetData
//     )
//     res.json(updatedBudget)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // DELETE single budget  /budget/:budgetId
// export const deleteBudget = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await budgetService.deleteBudget(req.params.budgetId))
//     res.status(204).end()
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }
import { Request, Response, NextFunction } from "express";
import Budget from "../../models/Budget";
import budgetService from "../../services/budgetServices";
import userServices from "../../services/userServices";
import { BadRequestError } from "../../helpers/apiError";

// POST /budget/:userId
export const addBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, budget, tag, comments } = req.body;
    const userId = req.params.userId;

    const newBudget = new Budget({
      title,
      budget,
      tag,
      comments,
    });

    const savedBudget = await budgetService.addBudget(newBudget);
    const budgetId = savedBudget._id?.toString();
    if (!budgetId) {
      throw new Error("Failed to generate budget ID.");
    }
    await userServices.addBudgetToUser(userId, budgetId);
    
    res.status(201).json(savedBudget);
  } catch (error) {
    console.error("Add budget error:", error);
    if (error instanceof Error && error.name === "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /budget
export const findBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await budgetService.findBudget());
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /budget/:budgetId
export const getBudgetById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await budgetService.getBudgetById(req.params.budgetId));
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// PUT /budget/:budgetId
export const updateBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateBudgetData = req.body;
    const budgetId = req.params.budgetId;
    const updatedBudget = await budgetService.updateBudget(
      budgetId,
      updateBudgetData
    );
    res.json(updatedBudget);
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// DELETE /budget/:budgetId
export const deleteBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await budgetService.deleteBudget(req.params.budgetId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name === "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

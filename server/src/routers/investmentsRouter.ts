import { Router } from 'express';

import {
  addInvestment,
  deleteInvestment,
  findInvestments,
  getInvestmentById,
  updateInvestment,
} from '../helpers/controllers/investmentsController';

const router = Router();

router.get('/', findInvestments);
router.post('/:userId', addInvestment); // Fixed missing parenthesis
router.get('/:investmentId', getInvestmentById);
router.delete('/:investmentId', deleteInvestment);
router.put('/:investmentId', updateInvestment);

export default router;

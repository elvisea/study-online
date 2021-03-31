import { Router } from 'express';
// import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '../middlewares/useAuthentication';
import ProvidersController from '../controllers/ProvidersController';
// import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
// import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const allusersRouter = Router();

// const providersController = new ProvidersController();
// const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
// const providerDayAvailabilityController = new ProviderDayAvailabilityController();

allusersRouter.use(ensureAuthenticated);

allusersRouter.get('/', ProvidersController.index);

// providersRouter.get(
//   '/:provider_id/month-availability',
//   celebrate({
//     [Segments.PARAMS]: {
//       provider_id: Joi.string().uuid().required(),
//     },
//   }),
//   providerMonthAvailabilityController.index,
// );
// providersRouter.get(
//   '/:provider_id/day-availability',
//   celebrate({
//     [Segments.PARAMS]: {
//       provider_id: Joi.string().uuid().required(),
//     },
//   }),
//   providerDayAvailabilityController.index,
// );

export default allusersRouter;

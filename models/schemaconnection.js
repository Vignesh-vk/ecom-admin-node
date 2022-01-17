const mongoose = require('mongoose');

// importing schemas to create model
const importedfaqSchema = require('../schemas/faqschema');
const importedpageSchema = require('../schemas/pageschema');
const importedcountrySchema = require('../schemas/countryschema');
const importedimageSchema = require('../schemas/imageSchema');

// Creating schema
const FaqSchema = mongoose.Schema(importedfaqSchema, { timestamps: true, versionKey: false });
const PageSchema = mongoose.Schema(importedpageSchema, { timestamps: true, versionKey: false });
const CountrySchema = mongoose.Schema(importedcountrySchema, { timestamps: true, versionKey: false });
const ImageSchema = mongoose.Schema(importedimageSchema, { timestamps: true, versionKey: false });

// Creating models
const FaqModel = mongoose.model('faqs', FaqSchema);
const PageModel = mongoose.model('pages', PageSchema);
const CountryModel = mongoose.model('countries', CountrySchema);
const ImageModel = mongoose.model('images', ImageSchema);

module.exports = {
  faqs: FaqModel,
  pages: PageModel,
  countries: CountryModel,
  images:ImageModel
}

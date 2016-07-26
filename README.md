# PrivAddon

The add-on is loaded on every web page, but the processing only occurs in Google pages. The [manifest file](./manifest.json.html) can declare match patterns to load the content scripts only into specific URLs. However, match patterns cannot have wild cards replacing the domain, so it would be necessary to specify all possible country domains.

Training occurs the first time a Google page is visited. Subsequent training sessions occur every time the user clicks on the button that says that an advert had been misclassified. The advert is then added to the training data with the correct label.

Right now, the add-on only shows the user if the adverts are sensitive or not. The actual learning identification still has to be implemented. See the comments in [learning.js](./learning.js.html#line19) and the first item in the TODO list below explaining the problem.


---


## TODO list

* Implement the [learning](./learning.js.html) identification part. I have to send a probe query, but I don't know how to get the adverts. The HTTP request's response only contains the static portions of the results page; the rest is only javascript. I needed something like a hidden window or tab, so I could use the Document interface to access the adverts (this is what I'm doing in the rest of the processing);
	* From time to time, the add-on would send the probe query, verify if Google returns sensitive ads and warn the user.
* Modify the training data: it has to contain sensitive and nonsensitive topics;
* Modify the function [getAdLabel](./global.html#getAdLabel) to correctly identify the label according to the advert topic;
* Remove all debugging code (starting with `/**/`);
* Remove code to reset training (training_data.js);
* Change name and description of the add-on \([manifest.json](./manifest.json.html)\);
* Listen for other user events \([index.js](./index.js.html)\);
* Maybe retrain only after some number of adverts are identified as misclassified;
* Add copyright notice for the function [stemmer](./ad_processing.js.html#line225);
* Add browser or page actions (to do what?);
* Change the icon?
# Datacom Contact Form

### Mission 06
Mission Ready HQ (Advanced Developer)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=CaedanLavender_datacom&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=CaedanLavender_datacom)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=CaedanLavender_datacom&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=CaedanLavender_datacom)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=CaedanLavender_datacom&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=CaedanLavender_datacom)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=CaedanLavender_datacom&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=CaedanLavender_datacom)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=CaedanLavender_datacom&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=CaedanLavender_datacom)

***

The purpose of this project is to build a contact form for Datacom that then submits the details to a database. The project has to be dockerized and deploy automatically.

The app is combination of **Express** and **React**. The react build directory is served to the user. The express app also handles api endpoints that the React app uses to interact with a **MongoDB Atlas** database.
Additionally, by clicking the 'signin' button you can enter a mock 'admin portal' where all unresolved messages are displayed.

**Cypress** is used to perform some basic testing. This can be run locally, but it is also automated through a **Github actions** workflow. The workflow additionally triggers a **SonarCloud** analysis. After both of these jobs run successfully a deployment webhook is triggered which causes [Render](www.render.com) to pull the project and deploy it as a **Docker** container.

Finally, the site is available publicly at datacom.onrender.com.
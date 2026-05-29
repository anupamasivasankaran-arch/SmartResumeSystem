const express =
    require("express");

const multer =
    require("multer");

const router =
    express.Router();

const {

    uploadResume,
    getResumes,
    getResumeById,
    deleteResume

} =
    require(
        "../controllers/resumeController"
    );

const storage =
    multer.diskStorage({

        destination:
            function (
                req,
                file,
                cb
            ) {

                cb(
                    null,
                    "uploads/"
                );

            },

        filename:
            function (
                req,
                file,
                cb
            ) {

                cb(
                    null,
                    Date.now() +
                    "-" +
                    file.originalname
                );

            }

    });

const upload =
    multer({ storage });

router.post(
    "/upload",
    upload.single("resume"),
    uploadResume
);

router.get(
    "/",
    getResumes
);

router.get(
    "/:id",
    getResumeById
);

router.delete(
    "/:id",
    deleteResume
);

module.exports =
    router;
import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  TextField,
  Select,
  Input,
  ManuItem,
  Dialog,
  DialogAction,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { userFrom, Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: { marginBottom: theme.spacing(2) },
}));
const tags = ["fun", "programing", "health", "sicience"];
const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});
export const AddPostFrom = ({open, handleClose}) => {
    const {register, required, handleSubmit, control, errors, reset}= useForm({
        resolver: yupResolver(postSchema),
    });
    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose}>
            <Dialog>Create New Text</Dialog>
            <DialogContent>
                <DialogContentText>
                Fill in the form below to add new content.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};

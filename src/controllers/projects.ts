import type { Request, Response } from "express";
import prisma from "../lib/db";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    return res.status(200).json({
      data: projects,
      success: true,
      message: "Projects retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while retrieving projects",
    });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const project = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    return res.status(201).json({
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating project",
      error,
    });
  }
};

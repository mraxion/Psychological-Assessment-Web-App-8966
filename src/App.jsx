// Actualizar la línea de importación al inicio del archivo para incluir FiInfo
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import html2pdf from 'html2pdf.js';

const { 
  FiPlay, 
  FiArrowRight, 
  FiArrowLeft, 
  FiCheck, 
  FiDownload, 
  FiRefreshCw, 
  FiBrain, 
  FiHeart, 
  FiUsers, 
  FiTarget, 
  FiShield, 
  FiClipboard, 
  FiHome,
  FiInfo // Añadido FiInfo
} = FiIcons;

// El resto del código permanece igual...
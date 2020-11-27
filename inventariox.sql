-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2020 a las 00:27:37
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventariox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albaran`
--

CREATE TABLE `albaran` (
  `id` int(11) NOT NULL,
  `Trabajador` int(11) NOT NULL,
  `Producto` int(11) NOT NULL,
  `Proveedor` int(11) NOT NULL,
  `FechaPed` date NOT NULL,
  `FechaRec` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `albaran`
--

INSERT INTO `albaran` (`id`, `Trabajador`, `Producto`, `Proveedor`, `FechaPed`, `FechaRec`) VALUES
(2, 2, 2, 18, '2020-11-16', '2020-11-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Tipo` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `FechaCad` date NOT NULL,
  `Proveedor` int(11) NOT NULL,
  `Precio` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `Nombre`, `Tipo`, `FechaCad`, `Proveedor`, `Precio`) VALUES
(2, 'Manzanass', 'Fruta', '2020-11-27', 1, 10.25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Producto` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `CIF` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id`, `Nombre`, `Producto`, `CIF`) VALUES
(1, 'Maximo', 'Carnes', '12365'),
(18, 'Maximo', 'qwerty', '133');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE `trabajador` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `Apellidos` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`id`, `Nombre`, `Apellidos`) VALUES
(1, 'Maximo', 'Madrona Duran'),
(2, 'Antonio', 'manolo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pass` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `pass`) VALUES
(0, 'noelia', '8cb2237d0679ca88db64'),
(2, 'maximo', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albaran`
--
ALTER TABLE `albaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Trabajador` (`Trabajador`,`Producto`,`Proveedor`),
  ADD KEY `Producto` (`Producto`),
  ADD KEY `Proveedor` (`Proveedor`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Proveedor` (`Proveedor`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albaran`
--
ALTER TABLE `albaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albaran`
--
ALTER TABLE `albaran`
  ADD CONSTRAINT `albaran_ibfk_1` FOREIGN KEY (`Producto`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `albaran_ibfk_2` FOREIGN KEY (`Proveedor`) REFERENCES `proveedor` (`id`),
  ADD CONSTRAINT `albaran_ibfk_3` FOREIGN KEY (`Trabajador`) REFERENCES `trabajador` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`Proveedor`) REFERENCES `proveedor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

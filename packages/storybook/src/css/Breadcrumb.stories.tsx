import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/breadcrumb';

import pkg from '../../../../components/Breadcrumb/package.json';
import readme from '../../../../components/Breadcrumb/README.md';

const meta = {
  title: 'CSS/Navigation/Breadcrumb',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
            aria-current="page"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const HoveredItem: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a
              className="denhaag-breadcrumb__link denhaag-breadcrumb__link--hover"
              href="https://example.com/"
              itemprop="item"
            >
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const FocusedItem: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a
              className="denhaag-breadcrumb__link denhaag-breadcrumb__link--focus"
              href="https://example.com/"
              itemprop="item"
            >
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const RTL: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb" dir="rtl">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a
              className="denhaag-breadcrumb__link denhaag-breadcrumb__link--hover"
              href="https://example.com/"
              itemprop="item"
            >
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const Long: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--hidden"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Wonen en leven
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--hidden"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Wonen en leven
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Wonen en leven
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/b/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="3" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="4" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/" itemprop="item" aria-label="Homepage">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 18 17"
                className="denhaag-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8.4467 0.877484C8.76244 0.596828 9.23823 0.596828 9.55397 0.877484L17.054 7.54415C17.398 7.84992 17.4289 8.37664 17.1232 8.72063C16.8174 9.06461 16.2907 9.0956 15.9467 8.78983L15.667 8.54121V14.8337C15.667 15.7541 14.9208 16.5003 14.0003 16.5003H4.00033C3.07986 16.5003 2.33367 15.7541 2.33367 14.8337V8.54121L2.05397 8.78983C1.70999 9.0956 1.18326 9.06461 0.877493 8.72063C0.571728 8.37664 0.602712 7.84992 0.946698 7.54415L8.4467 0.877484ZM4.00033 7.05973V14.8337H6.50033V10.667C6.50033 10.2068 6.87343 9.83366 7.33367 9.83366H10.667C11.1272 9.83366 11.5003 10.2068 11.5003 10.667V14.8337H14.0003V7.05973L9.00033 2.61529L4.00033 7.05973ZM9.83367 14.8337V11.5003H8.167V14.8337H9.83367Z"
                  fill="#1261A3"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Wonen en leven
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/b/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="3" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="4" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const WithIconAndFocus: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a
              className="denhaag-breadcrumb__link denhaag-breadcrumb__link--focus"
              href="https://example.com/"
              itemprop="item"
              aria-label="Homepage"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 18 17"
                className="denhaag-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4467 0.877484C8.76244 0.596828 9.23823 0.596828 9.55397 0.877484L17.054 7.54415C17.398 7.84992 17.4289 8.37664 17.1232 8.72063C16.8174 9.06461 16.2907 9.0956 15.9467 8.78983L15.667 8.54121V14.8337C15.667 15.7541 14.9208 16.5003 14.0003 16.5003H4.00033C3.07986 16.5003 2.33367 15.7541 2.33367 14.8337V8.54121L2.05397 8.78983C1.70999 9.0956 1.18326 9.06461 0.877493 8.72063C0.571728 8.37664 0.602712 7.84992 0.946698 7.54415L8.4467 0.877484ZM4.00033 7.05973V14.8337H6.50033V10.667C6.50033 10.2068 6.87343 9.83366 7.33367 9.83366H10.667C11.1272 9.83366 11.5003 10.2068 11.5003 10.667V14.8337H14.0003V7.05973L9.00033 2.61529L4.00033 7.05973ZM9.83367 14.8337V11.5003H8.167V14.8337H9.83367Z"
                  fill="#1261A3"
                />
              </svg>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Wonen en leven
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/b/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="3" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <span className="denhaag-breadcrumb__text" itemprop="name">
              Kliko&apos;s
            </span>
            <meta itemprop="position" content="4" />
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const WithoutMicrodata: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list">
          <li className="denhaag-breadcrumb__item">
            <a className="denhaag-breadcrumb__link" href="https://example.com/">
              <span className="denhaag-breadcrumb__text">Home</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
          <li className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item">
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/">
              <span className="denhaag-breadcrumb__text">Afval</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
          <li className="denhaag-breadcrumb__item">
            <span className="denhaag-breadcrumb__text">Kliko&apos;s</span>
          </li>
        </ol>
      </div>
    </nav>
  ),
};

export const WithoutCurrent: Story = {
  render: () => (
    <nav className="denhaag-breadcrumb" aria-label="Breadcrumb">
      <div className="denhaag-responsive-content">
        <ol className="denhaag-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            className="denhaag-breadcrumb__item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Home
              </span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          <li
            className="denhaag-breadcrumb__item denhaag-breadcrumb__item--mobile-item"
            itemscope
            itemtype="https://schema.org/ListItem"
            itemprop="itemListElement"
          >
            <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemprop="item">
              <span className="denhaag-breadcrumb__text" itemprop="name">
                Afval
              </span>
              <meta itemprop="position" content="2" />
            </a>
          </li>
        </ol>
      </div>
    </nav>
  ),
};
